var squares = 8*8;

gridCreate(squares);
gridUpdate();

function gridCreate(squares) {
 const grid = document.getElementById('grid');

 grid.textContent = '';

 var height = Math.floor(grid.offsetHeight);
 var width = Math.floor(grid.offsetWidth);
 var gridSize = height*width;
 
 var borderLength = 2;

 const squareSize = Math.sqrt(gridSize/squares) - borderLength;

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

function gridDraw() {

  const defaultColour = document.getElementById('default');
  const shadedColour = document.getElementById('shaded');
  const randomColour = document.getElementById('random');
  const eraser = document.getElementById('eraser');
  const gridSquare = document.querySelectorAll('.grid-squares');

  gridSquare.forEach(element => {
    element.addEventListener('mouseover', function(e) {
      e.target.style.backgroundColor = 'black';
    });
  });

  defaultColour.addEventListener('click', function(e) {
    gridSquare.forEach(element => {
      element.addEventListener('mouseover', function(e) {
        e.target.style.backgroundColor = 'black';
      });
    });
  });

  shadedColour.addEventListener('click', function (e) {
    gridSquare.forEach(element => {
      var shadedOne = 255;
      var shadedTwo = 255;
      var shadedThree = 255;
      element.addEventListener('mouseover', function (e) {
        if (shadedOne >= 0 && shadedTwo >= 0 && shadedThree >= 0) {
          shadedOne = shadedOne - 25.5;
          shadedTwo = shadedTwo - 25.5;
          shadedThree = shadedThree - 25.5;
          console.log('hello');
        }
        e.target.style.backgroundColor = 'rgb(' + shadedOne + ',' + shadedTwo + ',' + shadedThree + ')';
      });
    });
  });

  randomColour.addEventListener('click', function(e) {
    gridSquare.forEach(element => {
      element.addEventListener('mouseover', function(e) {
        var one = Math.floor(Math.random() * (255));
        var two = Math.ceil(Math.random() * 255);
        var three = Math.floor(Math.random() * 255);
        e.target.style.backgroundColor = 'rgb(' + one + ',' + two + ',' + three + ')';
      });
    });
  });

  eraser.addEventListener('click', function (e) {
    gridSquare.forEach(element => {
      element.addEventListener('mouseover', function (e) {
        e.target.style.backgroundColor = 'white';
      });
    });
  });

  const gridSubmit = document.getElementById('grid-submit');

  gridSubmit.addEventListener('click', modal);
}

function gridUpdate() {
 
 const button = document.getElementById('grid-erase');
 const gridSquare = document.querySelectorAll('.grid-squares');

 button.addEventListener('click', update)

 function update() {
   gridSquare.forEach(element => {
     element.classList.remove('active');
     element.style.backgroundColor = '';
   });
 };

 const submit = document.getElementById('submit');
 const modal = document.getElementById('modal');
 
 submit.addEventListener('click', () => {
   const gridNum = document.getElementById('grid-number').value;
   if (gridNum >= 1 && gridNum <= 100) {
     squares = gridNum;
     modal.style.display = 'none';
     gridCreate(squares * squares);
   }
 })

}

function modal() {
  const modal = document.getElementById('modal');
  modal.style.display = 'block';

  const close = document.getElementById('close');

  close.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}