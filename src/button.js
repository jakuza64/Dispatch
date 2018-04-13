function Button(text, callBack, isVisible, x, y) {
	
	//creates the button's container
	this.button = new PIXI.Container();

	//creates the button's text object
	let textObj = new Text(text,isVisible,1,x,y);

	//creates the rectangle
	let rect = new PIXI.Graphics();
	//rect.isFastRect(true);
	this.padding = 8;
	let width = textObj.getWidth();//using text width and height to determine rectangle properties
	let height = textObj.getHeight();
	rect.lineStyle(0);
	rect.beginFill(0xF0F3F3);
	rect.drawRect(x-this.padding, y-this.padding, width+(this.padding*2), height+(this.padding*2));
	rect.endFill();
	//invisible by default
	rect.visible = false;
	this.button.addChild(rect);
	//set button hit area to same as rectangle
	this.button.hitArea = rect.getBounds();

	//adds button functionality to rectangle
	this.button.interactive = true;
	this.button.buttonMode = true;
	this.button.on('pointerdown', function() {
		callBack();
	})// Pointers normalize touch and mouse
			.on('pointerover', onPointerOver)
			.on('pointerout', onPointerOut);

	//added after rectangle for sorting
	this.button.addChild(textObj.textObj);

	//adds the button to the stage
	app.stage.addChild(this.button);
}

function onPointerOver() {
	this.getChildAt(0).visible = true;
	//this.getChildAt(1).visible = false;
	this.getChildAt(1).tint = 0x161B1C;
}

function onPointerOut() {
	this.getChildAt(0).visible = false;
	//this.getChildAt(1).visible = true;
	this.getChildAt(1).tint = 0xFFFFFF;
}