function onOpen() {
  const ui = SpreadsheetApp.getUi();
  const menu = ui.createMenu('AutoFill Docs');
  menu.addItem('Create New Docs', 'createNewGoogleDocs')
  menu.addToUi();
}


function createNewGoogleDocs() {
  const googleDocTemplate = DriveApp.getFileById('1rk3OGI270Tx7gnO1q2eWcbBCb8ImgujdnVt4qdYtpcE');
  const destinationFolder = DriveApp.getFolderById('1tF5zjHwNhc3NCIwfJjTXGbXGx4Rf9TS6')
    const sheet = SpreadsheetApp
    .getActiveSpreadsheet()
    .getSheetByName('sheet1')
      const rows = sheet.getDataRange().getValues();


        rows.forEach(function(row, index){
    if (index === 0) return;
    if (row[7]) return;


    const copy = googleDocTemplate.makeCopy(`${row[1]}, ${row[0]} Employee Details` , destinationFolder)
    const doc = DocumentApp.openById(copy.getId())
    const body = doc.getBody();


        const friendlyDate = new Date(row[0]).toLocaleDateString();


    body.replaceText('{{Full Name}}', row[1]);
    body.replaceText('{{Your Address}}', row[2]);
    body.replaceText('{{Your City}}', row[3]);
    body.replaceText('{{Your City2}}', row[4]);
    body.replaceText('{{Your Email}}', row[5]);
   


        doc.saveAndClose();  
    const url = doc.getUrl();
  sheet.getRange(index + 1, 7).setValue(url)
  
})




}


