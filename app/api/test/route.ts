import { google } from 'googleapis'
import { NextResponse } from 'next/server'

const getGoogleSheets = () => {
  // Properly format the private key
  const privateKey = process.env.GOOGLE_SHEETS_PRIVATE_KEY
    ? process.env.GOOGLE_SHEETS_PRIVATE_KEY.split(String.raw`\n`).join('\n')
    : ''

  const client = new google.auth.JWT({
    email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
    key: privateKey,
    scopes: ['https://www.googleapis.com/auth/spreadsheets']
  })

  return google.sheets({ version: 'v4', auth: client })
}

export async function GET() {
  try {
    // Test environment variables
    const envCheck = {
      hasClientEmail: !!process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
      hasPrivateKey: !!process.env.GOOGLE_SHEETS_PRIVATE_KEY,
      hasSpreadsheetId: !!process.env.GOOGLE_SHEETS_SPREADSHEET_ID,
      hasSheetName: !!process.env.GOOGLE_SHEETS_SHEET_NAME,
    }

    // Test Google Sheets connection
    const sheets = getGoogleSheets()
    const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID
    const sheetName = process.env.GOOGLE_SHEETS_SHEET_NAME || 'RSVPs'

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: `${sheetName}!A1:G1`,
    })

    return NextResponse.json({
      success: true,
      envCheck,
      sheetsConnection: 'success',
      headers: response.data.values?.[0] || []
    })
  } catch (error: any) {
    console.error('Test endpoint error:', error)
    return NextResponse.json({
      success: false,
      error: error.message,
      envCheck: {
        hasClientEmail: !!process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
        hasPrivateKey: !!process.env.GOOGLE_SHEETS_PRIVATE_KEY,
        hasSpreadsheetId: !!process.env.GOOGLE_SHEETS_SPREADSHEET_ID,
        hasSheetName: !!process.env.GOOGLE_SHEETS_SHEET_NAME,
      }
    }, { status: 500 })
  }
} 