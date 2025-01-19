const fs = require('fs');

// Step 1: Read a file
fs.readFile('input.txt', 'utf8', (err, data1) => {
    if (err) {
        console.error("Error reading file1:", err);
        return;
    }
    console.log("File1 content:", data1);

    // Step 2: Read another file based on the result of the first
    fs.readFile('file2.txt', 'utf8', (err, data2) => {
        if (err) {
            console.error("Error reading file2:", err);
            return;
        }
        console.log("File2 content:", data2);

        // Step 3: Perform another asynchronous task
        fs.writeFile('output.txt', data1 + data2, (err) => {
            if (err) {
                console.error("Error writing to output file:", err);
                return;
            }
            console.log("Successfully wrote to output.txt");

            // Step 4: Do one more task after writing
            fs.readFile('output.txt', 'utf8', (err, finalData) => {
                if (err) {
                    console.error("Error reading output file:", err);
                    return;
                }
                console.log("Output file content:", finalData);
            });
        });
    });
});
