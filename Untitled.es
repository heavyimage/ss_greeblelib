// 1. Basic components

// Boxes
rule big_box {
	{s 1.05} box
}

rule small_box {
	{s 0.95} box
}

#define EDGE_THICKNESS 0.15
rule edgebox {
	box
	{x 0.5 y 0.5 s EDGE_THICKNESS EDGE_THICKNESS 1} box
	{x 0.5 y -0.5 s EDGE_THICKNESS EDGE_THICKNESS 1} box
	{x -0.5 y -0.5 s EDGE_THICKNESS EDGE_THICKNESS 1} box
	{x -0.5 y 0.5 s EDGE_THICKNESS EDGE_THICKNESS 1} box

	{z 0.5 y 0.5 s 1 EDGE_THICKNESS EDGE_THICKNESS} box
	{z 0.5 y -0.5 s 1 EDGE_THICKNESS EDGE_THICKNESS} box
	{z -0.5 y -0.5 s 1 EDGE_THICKNESS EDGE_THICKNESS} box
	{z -0.5 y 0.5 s 1 EDGE_THICKNESS EDGE_THICKNESS} box

	{z 0.5 x 0.5 s EDGE_THICKNESS 1 EDGE_THICKNESS} box
	{z 0.5 x -0.5 s EDGE_THICKNESS 1 EDGE_THICKNESS} box
	{z -0.5 x -0.5 s EDGE_THICKNESS 1 EDGE_THICKNESS} box
	{z -0.5 x 0.5 s EDGE_THICKNESS 1 EDGE_THICKNESS} box
}

rule low_decobox {
	box
	{s 1.05 1 1} box
	{s 1 1.05 1} box
	{s 1 1 1.05} box
}
rule mid_decobox {
	box
	{s 1.1 1 1} box
	{s 1 1.1 1} box
	{s 1 1 1.1} box
}
rule high_decobox {
	box
	{s 1.15 1 1} box
	{s 1 1.15 1} box
	{s 1 1 1.15} box
}

rule negabox {
	{s 0.5 x 0.5 y -0.5 z 0.5} metabox
	{s 0.5 x -0.5 y -0.5 z 0.5} metabox
	{s 0.5 x -0.5 y -0.5 z -0.5} metabox
	{s 0.5 x 0.5 y -0.5 z -0.5} metabox
	{s 0.5 x 0.5 y 0.5 z 0.5} metabox
	{s 0.5 x -0.5 y 0.5 z 0.5} metabox
	{s 0.5 x -0.5 y 0.5 z -0.5} metabox
	{s 0.5 x 0.5 y 0.5 z -0.5} metabox
}

rule metabox w 10 { box }
rule metabox w 10 { big_box }
rule metabox w 10 { small_box }
rule metabox w 10 { edgebox }
rule metabox w 5 { low_decobox }
rule metabox w 15 { mid_decobox }
rule metabox w 5 { high_decobox }
rule metabox w 10 {negabox}
rule metabox w 1  {  }

// Panels
rule panel {
	 {s 0.1 1 1} metabox
}

// 2. xforms
rule rot_45 {
	{ry 45} rot_45
}
rule rot_45 w 2 {}

// 3. Components

// Heatsink
rule heatsink {
	1 * {x -0.45 y 0.2} 5 * {x 0.15} 1 * {s 0.8} panel
}

// fin
rule fin {
	panel
}

// Antenas
rule antena {
	3 * {y 1 s 0.75 s 0.2 1.5 0.2} metabox
}


// Brace
rule brace {
	1 * {y 0.6 s 0.33} 4 * {ry 90} 1 * {x 0.8 rz 45} panel
}
rule brace { }


// 4. Complex Structures

// Towers
// Platforms / fences
// Stuff (AC)
// weapons
// Vents
// pipes
// lips for everything!
// heatsinks
// dish
// wires
// panel on an arm


// Shieldrings
rule shieldring {
	1 * {y 1.5} 8 * {ry 45} 1 * {x 0.3 s 1 0.66 0.2} panel
}

rule shieldring {
	1 * {y 1.5} 4 * {ry 90} 1 * {x 0.3 s 1 0.66 0.4} panel
}

// Shieldstalk
rule shieldstalk {
	brace
	antena	
	// connectors!
	shieldring
}

// 5. Combiners
rule decorate {}

rule decorate  {
	rot_45 shieldstalk
}

rule decorate  {
	heatsink
}

// 6. Core 
rule greeblebox {
	//box
	decorate
}

// 7. Main
1 * {s 4} 10 * {x 1 color white} greeblebox
