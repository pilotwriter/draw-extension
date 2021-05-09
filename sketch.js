chrome.runtime.onMessage.addListener((req,sender,sendResponse)=>{
    if(req === "draw")
    myp5 = new p5(s);
})


let s = function(sketch) {
  sketch.setup = function() {
    document.body.style['userSelect'] = 'none';
    const scrollHeight = document.body.scrollHeight;
    let h = document.body.clientHeight;
    let c = sketch.createCanvas(sketch.windowWidth, scrollHeight);
    c.position(0, 0);
    c.style('pointer-events', 'none');
    sketch.clear();
  };

  sketch.draw = function() {
    sketch.stroke(0);
    sketch.strokeWeight(4);
    if (sketch.mouseIsPressed) {
      sketch.line(sketch.mouseX, sketch.mouseY, sketch.pmouseX, sketch.pmouseY);
    }
  };
};

let myp5;
