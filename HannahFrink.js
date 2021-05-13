console.log('in javascript');

function clickSquareImage(squareImageName, optMedia = "") {

    console.log("in clickSquareImage");
    var modal = document.getElementById("fullSizeModal");
    modal.style.display = "block";

    imageFileName = './FullSize/'+squareImageName+'.jpg';
    var modalImage = document.getElementById("modalFullImageSrc")
    modalImage.src = imageFileName;
 
    var captionText = document.getElementById("modalFullImageName");
    captionText.innerHTML = squareImageName + optMedia;

}


function closeClick() {
    console.log("in closeClick");
    var modal = document.getElementById("fullSizeModal");
    modal.style.display = "none";
}












// *************************************
// START HERE
// *************************************

// Line 16 shows an error when looking in the
// viewer.  Modal window needs to be centered, 
// back part of dom needs to be shaded and made
// unable to click
// close button needs to be enabled.
// https://www.w3schools.com/howto/howto_css_modal_images.asp
// this is the tutorial used for modal images.  Follow it!  It will stop the sizing problems for the image, and stop the screen from being seen behind.  Currently, our project does not resize correctly.

// After doing all this, get Hannah to help
// write blub, and decide what images to use
// and where to get them.