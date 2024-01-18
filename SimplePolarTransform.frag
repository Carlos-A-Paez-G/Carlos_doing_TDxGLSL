//Returns the coordinates of a point in Polar
vec2 Polar(vec2 uv) {
	return vec2(sqrt(uv.x*uv.x + uv.y*uv.y), atan(uv.y/uv.x));
}

out vec4 fragColor;
void main()
{
	vec2 uv = vUV.st;
	
	uv = Polar(uv);
	uv *= .6;
  //Try experimenting with other trig functions..!
	//uv.x = cos(uv.x * 3.0);
	
	vec4 color = texture(sTD2DInputs[0], uv);
	fragColor = TDOutputSwizzle(color);
}
