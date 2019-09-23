/*!
 * wordup v2.0.0
 * A description for your project.
 * (c) 2019 
 * UNLICENSED License
 * http://link-to-your-git-repo.com
 */

/**
 * OPENS AND CLOSES  NAV
 * @param onWidth toggles the menu
 * @param onDisplay toggles the overlay
 * @returns {void}
 */

const navButton = document.getElementById('opennav');
const overLay = document.getElementById('sidenavoverlay');

function moveNav(onWidth, onDisplay) {
  document.getElementById('mySidenav').style.width = onWidth;
  document.getElementById('sidenavoverlay').style.display = onDisplay;
}

navButton.addEventListener('click', () => {
  moveNav('250px', 'block');
}, {
  passive: true,
});
overLay.addEventListener('click', () => {
  moveNav('0', 'none');
}, {
  passive: true,
});
navButton.addEventListener('touchstart', () => {
  moveNav('250px', 'block');
}, {
  passive: true,
});
overLay.addEventListener('touchstart', () => {
  moveNav('0', 'none');
}, {
  passive: true,
});


/**
 * download a picture of the wall
 * @returns {void}
 */

const downloadThis = document.getElementById('download');
function getCssRules(styleSheets) {
  const cssRules = [];
  styleSheets.forEach((sheet) => {
    if (sheet.hasOwnProperty('cssRules')) {
      try {
        util.asArray(sheet.cssRules || []).forEach(cssRules.push.bind(cssRules));
      } catch (e) {
        console.log(`Error while reading CSS rules from ${sheet.href}`, e.toString());
      }
    }
  });
  return cssRules;
}

function printhis() {
  const myDom = document.getElementById('main');
  // myDom.style.transform = myDom.style.webkitTransform = "scale(4)";
  // myDom.style.transformOrigin = myDom.style.webkitTransformOrigin = "0 0";

  myDom.style.transform = 'scale(4)';
  // myDom.style.backgroundPosition = 'contain';
  // myDom.style.backgroundSize = '-100%!important';
  myDom.style.transformOrigin = '0 0';
  myDom.style.webkitTransform = 'scale(4)';
  myDom.style.webkitTransformOrigin = '0 0';
  myDom.style.backgroundSize = '25% 25%';
  myDom.style.backgroundPosition = '0% 0%';


  domtoimage.toBlob(document.getElementById('main'), {
    quality: 1,
    width: myDom.offsetWidth * 4,
    height: myDom.offsetHeight * 4,
    style: {
      // 'background-size': '100%',
      // backgroundColor: 'red', 'background-size': '100%', 'background-position': 'center', color: 'red',
    },
  })
    .then((blob) => {
      window.saveAs(blob, 'myWordUp.png');
      // myDom.style.transform += myDom.style.webkitTransform = "scale(1)";
      // myDom.style.transformOrigin += myDom.style.webkitTransformOrigin = "0 0";
      myDom.style.transform = 'scale(1)';
      myDom.style.transformOrigin = '0 0';
      myDom.style.webkitTransform = 'scale(1)';
      myDom.style.webkitTransformOrigin = '0 0';
      myDom.style.backgroundSize = '100% 100%';
      myDom.style.backgroundPosition = '50% 50%';
      // myDom.style.backgroundPosition = 'center';
      // myDom.style.backgroundSize = 'cover';
    });
}

downloadThis.onclick = printhis;
