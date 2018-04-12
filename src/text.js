//font style
var style = new PIXI.TextStyle({
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
});

function Text(textString, isVisible, x, y) {

	this.isVisible = isVisible;

	//initialize PIXI.Text object and set basic properties
	this.textString = new PIXI.Text(textString, style);
	this.textString.visible = isVisible;
	this.textString.position.set(x,y);

	//add text to the stage
	app.stage.addChild(this.textString);
}