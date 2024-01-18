//This function creates a sort of 'blob' based on a value that is given
//In the example below, I used some arbitrary additions of the r, g, and b channels of the image to decide the value
float smoothBlob(float val, float threshold, float smoothness) {
	return smoothstep(threshold-smoothness, threshold+smoothness, val);
}

out vec4 fragColor;

void main()
{
	float foo = u_time;

	vec2 uv = vUV.st;
	//uv.x *= .8;
	//uv = Polar(uv);
	//uv.x = cos(uv.x * 3.0);
	
	vec4 color = texture(sTD2DInputs[0], uv);

  //define an arbitrary threshold to use in smoothBlob
	float total = color.r + color.g + color.b;
  //use the value from the function as the blue channel for that pixel 
	color.b = smoothBlob(total, 1.2, 0.2); 

  //using a different arbitrary value to define the green channel
	total = total - color.b;
	color.g = smoothBlob(total, 1.0, 0.2);

	fragColor = TDOutputSwizzle(color);
}
