#ifdef GL_ES
precision highp float;
#endif

uniform vec2 u_resolution;
uniform float u_time;
uniform vec2 u_mouse;


void main() {
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
    vec2 mouse=u_mouse/u_resolution;
    st*=4.;
    mouse.y=1.-mouse.y;

   gl_FragColor=vec4(st.x,st.y,mouse.x,1.0);
}
