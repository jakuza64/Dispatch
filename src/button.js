function Button(text, callBack, isVisible, x, y) {
	
	//creates the button's container
	this.button = new PIXI.Container();

	//creates the button's text object
	this.textObj = new Text(text,isVisible,1,x,y);

	//creates the rectangle and adds to button container
	this.rect = new PIXI.Graphics();
	this.rect.isFastRect(true);
	this.padding = 8;

	this.updateRect = function() {
		let width = this.textObj.getWidth();//using text width and height to determine this.rectangle properties
		let height = this.textObj.getHeight();
		this.rect.clear();
		this.rect.lineStyle(0);
		this.rect.beginFill(0xF0F3F3);
		this.rect.drawRect(x-this.padding, y-this.padding, width+(this.padding*2), height+(this.padding*2));
		this.rect.endFill();

		//set button hit area to same as this.rectangle
		this.button.hitArea = this.rect.getBounds();
	}

	this.updateRect();
	//invisible by default
	this.rect.visible = false;
	this.button.addChild(this.rect);	

	//adds button functionality to button container
	this.button.interactive = true;
	this.button.interactiveChildren = false;
	this.button.buttonMode = true;
	this.button.on('pointerdown', function() {
		callBack();
	})// Pointers normalize touch and mouse
			.on('pointerover', onPointerOver)
			.on('pointerout', onPointerOut);

	//added after this.rectangle for sorting
	this.button.addChild(this.textObj.textObj);

	//adds the button to the stage
	app.stage.addChild(this.button);

	this.setText = function(text, updateBounds) {
		this.textObj.setText(text);
		if (updateBounds) {
			this.updateRect();
		}
	}

	
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