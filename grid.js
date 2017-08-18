function drawGrid(xMaxValue,yMaxValue, xInterval, yInterval, xOffset, yOffset) {

    console.log("from kutti "+ xMaxValue)
    console.log("from kutti "+ yMaxValue)
    var vLines = ((xMaxValue - (xMaxValue % xInterval)) / (xInterval)) + 2;
    var hLines = ((yMaxValue - (yMaxValue % yInterval)) / (yInterval)) + 2;
    const height = canvas.height - (2*yOffset);
    const width = canvas.width - (2*xOffset);
    ctx.beginPath();
    console.log(" canvas height =  " + canvas.height + "canvas Width = ", canvas.width);
    console.log(" height =  " + height + "Width = ", width);
    console.log( "HLines =", hLines, "vLines = ", vLines);
    

    ctx.moveTo(xOffset,yOffset);
    ctx.lineTo(xOffset,canvas.height-yOffset);
    ctx.moveTo(xOffset,canvas.height-yOffset);
    ctx.lineTo(canvas.width-xOffset, canvas.height-yOffset);

    ctx.stroke();
    ctx.beginPath();
    var tmpHgt = height + yOffset;
    var tmpWdth = width + xOffset;
    var labelText = 0;

    hgraphInterval = ((tmpHgt - (tmpHgt % hLines))/hLines);
    ctx.font = "italic  12px arial, sans-serif";
    for(var i = 0; i< hLines ; i++ ) {
        console.log("Calc Height =", tmpHgt, hgraphInterval);    
        ctx.moveTo(xOffset, tmpHgt); 
        ctx.lineTo(tmpWdth,tmpHgt);       
        if(yInterval*i > 999) {
            tmpText = (yInterval*i/1000);
            labelText = tmpText + "k"
        }
        ctx.fillText(labelText,xOffset - 15,tmpHgt);
        tmpHgt = tmpHgt - hgraphInterval;
    }
    ctx.lineWidth = 0.25;
    ctx.stroke();


    //Vertical Lines
    ctx.beginPath();
    var tmpHgt =  height + yOffset;
    var tmpWdth = xOffset;

    vgraphInterval = ((width - (width % vLines))/vLines);
    for(var i = 0; i< vLines ; i++ ) {
        // console.log("Calc Wdth =", tmpWdth, vgraphInterval);    
        ctx.moveTo(tmpWdth, yOffset); 
        ctx.lineTo(tmpWdth,tmpHgt);       

        tmpWdth = tmpWdth + vgraphInterval; 
        
    }
    ctx.lineWidth = 0.25;
    WriteAxisText(xMaxValue,yMaxValue, xInterval, yInterval, xOffset, yOffset);
    ctx.stroke();
    ctx.save();
}

function WriteAxisText(xMaxValue,yMaxValue, xInterval, yInterval, xOffset, yOffset) {
    var vLines = ((xMaxValue - (xMaxValue % xInterval)) / (xInterval)) + 2;
    var hLines = ((yMaxValue - (yMaxValue % yInterval)) / (yInterval)) + 2;
    const height = canvas.height - (2*yOffset);
    const width = canvas.width - (2*xOffset);
    
    console.log(" canvas height =  " + canvas.height + "canvas Width = ", canvas.width);
    console.log(" height =  " + height + "Width = ", width);
    console.log( "HLines =", hLines, "vLines = ", vLines);
    
    
    var tmpHgt = height + yOffset;
    var tmpWdth = width + xOffset;
    var labelText = 0;

    hgraphInterval = ((tmpHgt - (tmpHgt % hLines))/hLines);
    ctx.font = "italic  12px arial, sans-serif";
    for(var i = 0; i< hLines ; i++ ) {
        console.log("Calc Height =", tmpHgt, hgraphInterval);    
        if(yInterval*i > 999) {
            tmpText = (yInterval*i/1000);
            labelText = tmpText + "k"
        }
        ctx.fillText(labelText,xOffset - 15,tmpHgt);
        tmpHgt = tmpHgt - hgraphInterval;
    }

    //Vertical Lines

    var tmpHgt =  height + yOffset;
    var tmpWdth = xOffset;

    vgraphInterval = ((width - (width % vLines))/vLines);
    for(var i = 0; i< vLines ; i++ ) {
        // console.log("Calc Wdth =", tmpWdth, vgraphInterval);    
            if(yInterval*i > 999) {
            tmpText = (yInterval*i/1000);
            labelText = tmpText + "k"
        }
        ctx.fillText(xInterval*i,tmpWdth-10,tmpHgt + 10);

        tmpWdth = tmpWdth + vgraphInterval; 
        
    }
    
}