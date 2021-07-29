

  var dragSrcEl = null;
  
  function handleDragStart(e) {
    this.style.opacity = '0.4';
    
    dragSrcEl = this;

    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
  }

  function handleDragOver(e) {
    if (e.preventDefault) {
      e.preventDefault();
    }

    e.dataTransfer.dropEffect = 'move';
    
    return false;
  }

  function handleDragEnter(e) {
    this.classList.add('over');
  }

  function handleDragLeave(e) {
    this.classList.remove('over');
  }

  function handleDrop(e) {
    if (e.stopPropagation) {
      e.stopPropagation(); // stops the browser from redirecting.
    }
    
    if (dragSrcEl != this) {
      dragSrcEl.innerHTML = this.innerHTML;
      this.innerHTML = e.dataTransfer.getData('text/html');
    }
    
    return false;
  }

  function handleDragEnd(e) {
    this.style.opacity = '1';
    
    items.forEach(function (item) {
      item.classList.remove('over');
    });
  }
  
  
  let items = document.querySelectorAll('.container .card');
  items.forEach(function(item) {
    item.addEventListener('dragstart', handleDragStart, false);
    item.addEventListener('dragenter', handleDragEnter, false);
    item.addEventListener('dragover', handleDragOver, false);
    item.addEventListener('dragleave', handleDragLeave, false);
    item.addEventListener('drop', handleDrop, false);
    item.addEventListener('dragend', handleDragEnd, false);
  });


let table1 = document.getElementById('resizetable');
let table2 = document.getElementById('resizetable1');

var startX, startY, startWidth, startHeight;

table1.addEventListener('mousedown',initDrag,false);
table2.addEventListener('mousedown',initDrag1,false);

function initDrag(e) {
	console.log('initdrag')
   startX = e.clientX;
   startY = e.clientY;
   startWidth = parseInt(document.defaultView.getComputedStyle(table1).width, 10);
   startHeight = parseInt(document.defaultView.getComputedStyle(table1).height, 10);
   document.documentElement.addEventListener('mousemove', doDrag, false);
   document.documentElement.addEventListener('mouseup', stopDrag, false);
}


function doDrag(e) {
   table1.style.width = (startWidth + e.clientX - startX) + 'px';
   table1.style.height = (startHeight + e.clientY - startY) + 'px';
}

function stopDrag(e) {
    document.documentElement.removeEventListener('mousemove', doDrag, false);    document.documentElement.removeEventListener('mouseup', stopDrag, false);
}



function initDrag1(e) {
	console.log('initdrag')
   startX = e.clientX;
   startY = e.clientY;
   startWidth = parseInt(document.defaultView.getComputedStyle(table2).width, 10);
   startHeight = parseInt(document.defaultView.getComputedStyle(table2).height, 10);
   document.documentElement.addEventListener('mousemove', doDrag1, false);
   document.documentElement.addEventListener('mouseup', stopDrag1, false);
}


function doDrag1(e) {
   table2.style.width = (startWidth + e.clientX - startX) + 'px';
   table2.style.height = (startHeight + e.clientY - startY) + 'px';
}

function stopDrag1(e) {
    document.documentElement.removeEventListener('mousemove', doDrag1, false);    document.documentElement.removeEventListener('mouseup', stopDrag1, false);
}
