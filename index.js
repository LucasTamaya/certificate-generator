const { PDFDocument, StandardFonts, rgb } = require("pdf-lib");
const fontkit = require("@pdf-lib/fontkit");

const btn = document.querySelector(".form-btn");

let inputName;
let fontBytes;
let imgBytes;

btn.addEventListener("click", (e) => {
  e.preventDefault();
  // Récupère le nom de l'utilisateur
  inputName = document.querySelector(".form-input").value;
  createPdf();
});

// Fetch the fonts
const getFonts = async () => {
  const url = "/webfontkit-20220321-011046/sanchez-regular-webfont.woff";
  fontBytes = await fetch(url)
    .then((res) => res.arrayBuffer())
    .catch((err) => console.log(err));
};

// Fetch the image
const getImg = async () => {
  const url = "/img/codedamn-logo.png";
  imgBytes = await fetch(url)
    .then((res) => res.arrayBuffer())
    .catch((err) => console.log(err));
};

getFonts();
getImg();

async function createPdf() {
  // Create a new PDFDocument
  const pdfDoc = await PDFDocument.create();

  //Add font kit to the project
  pdfDoc.registerFontkit(fontkit);

  // Embed the regular font
  const regularFont = await pdfDoc.embedFont(StandardFonts.Courier);

  // Embed the bold font
  const boldFont = await pdfDoc.embedFont(StandardFonts.CourierBold);

  // Embed the Sanchez Regular Font
  const sanchezFont = await pdfDoc.embedFont(fontBytes);

  // Embed the image
  const imgRef = await pdfDoc.embedPng(imgBytes);

  // Get the dimensions of the img
  const imgDimensions = imgRef.scale(0.4);

  // Add a blank page to the document
  const page = pdfDoc.addPage();

  // Get the width and height of the page
  const { width, height } = page.getSize();

  // Set the font size
  const fontSize = 30;

  // Draw a string of text toward the top of the page
  page.drawText("CERTIFICATE OF COMPLETION", {
    x: 50,
    y: height - 4 * fontSize,
    size: fontSize,
    font: boldFont,
    color: rgb(0, 0.53, 0.71),
  });

  page.drawText("THIS IS PRESENTED TO", {
    x: 50,
    y: height - 6 * fontSize,
    size: fontSize - 8,
    font: regularFont,
    color: rgb(0.136, 0.136, 0.136),
  });

  page.drawText(inputName, {
    x: 50,
    y: height - 8 * fontSize,
    size: fontSize + 1,
    font: sanchezFont,
    color: rgb(0, 0.53, 0.71),
  });

  page.drawText("for trying their", {
    x: 50,
    y: height - 10 * fontSize,
    size: fontSize - 8,
    font: regularFont,
    color: rgb(0.136, 0.136, 0.136),
  });

  page.drawText("best to create a", {
    x: 50,
    y: height - 12 * fontSize,
    size: fontSize - 8,
    font: regularFont,
    color: rgb(0.136, 0.136, 0.136),
  });

  page.drawText("certificate generator application", {
    x: 50,
    y: height - 14 * fontSize,
    size: fontSize - 8,
    font: regularFont,
    color: rgb(0.136, 0.136, 0.136),
  });

  page.drawText("Codedamn", {
    x: imgDimensions.width + 90,
    y: height - 20 * fontSize,
    size: fontSize * 2,
    font: boldFont,
    color: rgb(0.136, 0.136, 0.136),
  });

  page.drawImage(imgRef, {
    x: 80,
    y: height - 23 * fontSize,
    width: imgDimensions.width,
    height: imgDimensions.height,
  });

  // Serialize the PDFDocument to bytes (a Uint8Array)
  const pdfBytes = await pdfDoc.save();

  // Trigger the browser to download the PDF document
  download(pdfBytes, "pdf-lib_creation_example.pdf", "application/pdf");
}
