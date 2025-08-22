import { google } from 'googleapis'
import { NextResponse } from 'next/server'

// Configure Google Sheets
const getGoogleSheets = () => {
  try {
    // Get the raw private key from environment variable
    let privateKey = process.env.GOOGLE_SHEETS_PRIVATE_KEY || ''
    
    // Remove any extra quotes if present
    if (privateKey.startsWith('"') && privateKey.endsWith('"')) {
      privateKey = privateKey.slice(1, -1)
    }
    
    // Replace literal \n with actual newlines
    privateKey = privateKey.replace(/\\n/g, '\n')

    console.log('Client email:', process.env.GOOGLE_SHEETS_CLIENT_EMAIL)
    console.log('Spreadsheet ID:', process.env.GOOGLE_SHEETS_SPREADSHEET_ID)
    console.log('Private key length:', privateKey.length)
    console.log('Private key starts with:', privateKey.substring(0, 27))
    console.log('Private key ends with:', privateKey.substring(privateKey.length - 25))

    const client = new google.auth.JWT({
      email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
      key: privateKey,
      scopes: ['https://www.googleapis.com/auth/spreadsheets']
    })

    return google.sheets({ version: 'v4', auth: client })
  } catch (error) {
    console.error('Error in getGoogleSheets:', error)
    throw error
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, guestCount } = body

    // Validate required fields
    if (!name || !guestCount) {
      return NextResponse.json(
        { error: 'Name and guest count are required' },
        { status: 400 }
      )
    }

    console.log('Creating Google Sheets client...')
    const sheets = getGoogleSheets()
    
    console.log('Preparing to append data...')
    const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID
    const sheetName = process.env.GOOGLE_SHEETS_SHEET_NAME || 'RSVPs'

    // Prepare the row data - simplified to just name and guest count
    const row = [
      new Date().toISOString(), // Timestamp
      name,
      guestCount
    ]

    console.log('Appending row to spreadsheet:', row)
    
    // Append the row to the spreadsheet
    const result = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: `${sheetName}!A:C`, // Updated to only 3 columns
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [row]
      }
    })

    console.log('Append result:', result.data)
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error saving RSVP:', error)
    // Log more details about the error
    if (error instanceof Error) {
      console.error('Error name:', error.name)
      console.error('Error message:', error.message)
      console.error('Error stack:', error.stack)
    }
    return NextResponse.json(
      { 
        error: 'Failed to save RSVP',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
} 