//font styles
let styles = [new PIXI.TextStyle({
    fontFamily: 'VT323',
    fontStyle: 'normal',
    fontSize: 38,
    fill: '#F0F3F3',
    dropShadow: true,
    dropShadowColor: '#FFFFFF',
    dropShadowBlur: 7,
    dropShadowAngle: 0,
    dropShadowDistance: 1,
    wordWrap: true,
    wordWrapWidth: 1000
}),
            new PIXI.TextStyle({
    fontFamily: 'VT323',
    fontStyle: 'normal',
    fontSize: 24,
    fill: '#F0F3F3',
    dropShadow: true,
    dropShadowColor: '#FFFFFF',
    dropShadowBlur: 7,
    dropShadowAngle: 0,
    dropShadowDistance: 1,
    wordWrap: true,
    wordWrapWidth: 1000
})];

function Text(text, isVisible, styleNum, x, y) {

	this.isVisible = isVisible;

	//initialize PIXI.Text object and set basic properties
	this.textObj = new PIXI.Text(text, styles[styleNum]);
	this.textObj.visible = isVisible;
	this.textObj.position.set(x,y);
	this.styleNum = styleNum;

	//add text to the stage
	app.stage.addChild(this.textObj);

	this.setText = function(text) {
		this.textObj.text = text;
	};

	this.getWidth = function() {
		return this.textObj.width;
	}

	this.getHeight = function() {
		return this.textObj.height;
	}

	this.getStyle = function() {
		return styles[this.styleNum];
	}
};