function readFileAsDataURL(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = () => reject(new Error('Error reading file.'));
        reader.readAsDataURL(file);
    });
}

document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('#soundForm');

    form.addEventListener('submit', async function (event) {
        event.preventDefault();

        const formData = new FormData(form);
        const data = {};

        for (const [name, value] of formData.entries()) {
            if (value instanceof File) {
                try {
                    const dataURL = await readFileAsDataURL(value);
                    data[name] = dataURL;
                } catch (error) {
                    console.error(`Error reading ${name}: ${error.message}`);
                }
            } else {
                data[name] = value;
            }
        }

        console.log('in popup.js', data);

        chrome.runtime.sendMessage({ data }, function (response) {
            console.log(response);
        });
    });
});
