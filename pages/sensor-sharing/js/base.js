/**
 * Created by white on 2017/8/28.
 */

// 简写
var Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies,
    Composites = Matter.Composites,
    Body = Matter.Body,
    Constraint = Matter.Constraint,
    MouseConstraint = Matter.MouseConstraint,
    Common = Matter.Common,
    Events = Matter.Events;


// 创建引擎
var engine = Engine.create();

// 创建渲染器
var render = Render.create({
    element: document.body,
    engine: engine,
    options: {
        width: window.innerWidth,
        height: window.innerHeight,
        background: '#FFF',
        wireframes : false
    }
});

// 墙壁
var thick = 50;
var w = window.innerWidth;
var h = window.innerHeight;
World.add(engine.world, [
    Bodies.rectangle(w/2, -thick/2, w, thick, { isStatic: true }),
    Bodies.rectangle(w/2, h+thick/2, w, thick, { isStatic: true }),
    Bodies.rectangle(w + thick/2, h/2, thick, h, { isStatic: true }),
    Bodies.rectangle(-thick/2, h/2, thick, h, { isStatic: true })
]);

// 鼠标约束
var mouseConstraint = MouseConstraint.create(engine, {
    element: render.canvas
});

World.add(engine.world, mouseConstraint);

// 运行引擎
Engine.run(engine);
Render.run(render);
