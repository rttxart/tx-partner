const fs = require('fs');
const path = '\\\\?\\c:\\Users\\rober\\Desktop\\Github Versionen Test\\tx-partner 2.0\\nul';

try {
    if (fs.existsSync(path)) {
        fs.unlinkSync(path);
        console.log('Datei "nul" erfolgreich gelöscht.');
    } else {
        console.log('Datei "nul" nicht gefunden.');
    }
} catch (err) {
    console.error('Fehler beim Löschen:', err.message);
}
