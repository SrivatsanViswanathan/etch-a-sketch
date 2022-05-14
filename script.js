//Global variables
var squares = 8 * 8;
var bool = false;
const grid = document.getElementById('grid');
const gridSubmit = document.getElementById('grid-submit');
const defaultColour = document.getElementById('default');
const shadedColour = document.getElementById('shaded');
const randomColour = document.getElementById('random');
const eraser = document.getElementById('eraser');
const gridErase = document.getElementById('grid-erase');

const modal = document.getElementById('modal');
const submit = document.getElementById('submit');
const close = document.getElementById('close');

gridCreate(squares);
gridUpdate();

// Create grid based on screen height and width
// Create grid squares based on default square amount OR user input
function gridCreate(squares) {
    grid.textContent = '';

    var height = Math.floor(grid.offsetHeight);
    var width = Math.floor(grid.offsetWidth);
    var borderLength = 2;

    var gridSize = height * width;
    var squareSize = Math.sqrt(gridSize / squares) - borderLength;

    for (var i = 0; i < squares; i++) {
        const gridSquare = document.createElement('div')
        gridSquare.classList.add('grid-squares');
        gridSquare.setAttribute('id', 'grid-squares');
        gridSquare.style.height = squareSize + 'px';
        gridSquare.style.width = squareSize + 'px';
        grid.append(gridSquare);
    }
    gridDraw();
}

// Draw on grid based on user's menu button selection
function gridDraw() {

    const gridSquare = document.querySelectorAll('.grid-squares');
    const toggle = document.querySelectorAll('.active');
    
    gridSquare.forEach(element => {
        element.addEventListener('mouseover', function (e) {
            e.target.style.backgroundColor = 'black';
        });
    });

    toggle.forEach(element => {
        if (element.classList.contains('active')) {
            bool = true;
            if (element === gridSubmit) {
                gridSize();
            }
            else if (element === defaultColour) {
                original();
            }
            else if (element === shadedColour) {
                shaded();
            }
            else if (element === randomColour) {
                random();
            }
            else if (element === eraser) {
                erase();
            }
            else if (element === gridErase) {
                eraseGrid();
            }
        }
    });

    gridSubmit.addEventListener('click', gridSize);
    defaultColour.addEventListener('click', original);
    shadedColour.addEventListener('click', shaded);
    randomColour.addEventListener('click', random);
    eraser.addEventListener('click', erase);
    gridErase.addEventListener('click', eraseGrid);
}

// Update grid based on user's grid size specifications
function gridUpdate() {
    submit.addEventListener('click', () => {
        const gridNum = document.getElementById('grid-number').value;
        if (gridNum >= 1 && gridNum <= 100) {
            squares = gridNum;
            modal.style.display = 'none';
            gridCreate(squares * squares);
        }
    });
}

// Modal pop up for updating grid size
function modalPopUp() {
    modal.style.display = 'block';
    close.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

// Update grid based on event listener from gridDraw()
function gridSize() {
    modalPopUp();
}

function original() {
    console.log(bool);
    const gridSquare = document.querySelectorAll('.grid-squares');
    const toggle = document.querySelectorAll('.active');
    if (!defaultColour.classList.contains('active')) {
        defaultColour.classList.add('active');
    }
    else {
        if (bool === false) {
            defaultColour.classList.remove('active');
        }
    }
    toggle.forEach(element => {
        if (bool === false) {
            element.classList.remove('active');
        }
    });
    if (bool === true) {
        bool = false;
    }
    gridSquare.forEach(element => {
        element.addEventListener('mouseover', function (e) {
            e.target.style.backgroundColor = 'black';
        });
    });
}

function shaded() {
    console.log(bool);
    const gridSquare = document.querySelectorAll('.grid-squares');
    const toggle = document.querySelectorAll('.active');
    if (!shadedColour.classList.contains('active')) {
        shadedColour.classList.add('active');
    }
    else {
        if (bool === false) {
            shadedColour.classList.remove('active');
            gridDraw();
            return 1;
        }
    }
    toggle.forEach(element => {
        if (bool === false) {
            element.classList.remove('active');
        }
    });
    if (bool === true) {
        bool = false;
    }
    gridSquare.forEach(element => {
        var shadedOne = 255;
        var shadedTwo = 255;
        var shadedThree = 255;
        element.addEventListener('mouseover', function (e) {
            if (shadedOne >= 0 && shadedTwo >= 0 && shadedThree >= 0) {
                shadedOne = shadedOne - 25.5;
                shadedTwo = shadedTwo - 25.5;
                shadedThree = shadedThree - 25.5;
            }
            e.target.style.backgroundColor = 'rgb(' + shadedOne + ',' + shadedTwo + ',' + shadedThree + ')';
        });
    });
}

function random() {
    const gridSquare = document.querySelectorAll('.grid-squares');
    const toggle = document.querySelectorAll('.active');
    console.log('s');
    if (!randomColour.classList.contains('active')) {
        randomColour.classList.add('active');
    }
    else {
        if (bool === false) {
            randomColour.classList.remove('active');
            gridDraw();
            return 1;
        }
    }
    toggle.forEach(element => {
        if (bool === false) {
            element.classList.remove('active');
        }
    });
    if (bool === true) {
        bool = false;
    }
    gridSquare.forEach(element => {
        element.addEventListener('mouseover', function (e) {
            var one = Math.floor(Math.random() * (255));
            var two = Math.ceil(Math.random() * 255);
            var three = Math.floor(Math.random() * 255);
            e.target.style.backgroundColor = 'rgb(' + one + ',' + two + ',' + three + ')';
        });
    });
}

function erase() {
    const gridSquare = document.querySelectorAll('.grid-squares');
    const toggle = document.querySelectorAll('.active');
    if (!eraser.classList.contains('active')) {
        eraser.classList.add('active');
    }
    else {
        if (bool === false) {
            eraser.classList.remove('active');
            gridDraw();
            return 1;
        }
    }
    toggle.forEach(element => {
        if (bool === false) {
            element.classList.remove('active');
        }
    });
    if (bool === true) {
        bool = false;
    }
    gridSquare.forEach(element => {
        element.addEventListener('mouseover', function (e) {
            e.target.style.backgroundColor = 'white';
        });
    });
}

function eraseGrid() {
    const gridSquare = document.querySelectorAll('.grid-squares');
    const toggle = document.querySelectorAll('.active');
    gridSquare.forEach(element => {
        element.style.backgroundColor = 'white';
    });
}