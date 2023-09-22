const DUMMY_DATA = [
    { id: '1', value: 6, region: 'ufdfsa' },
    { id: '2', value: 8, region: 'usfdsfga' },
    { id: '3', value: 11, region: 'bdbfd' },
    { id: '4', value: 2, region: 'bf' },
];

console.log(d3)
 
dataGenerator = () => {
    const dataGenerate = []
    for (let i = 0; i < 20; i++){
        const value = (Math.random() * i + 3)
        dataGenerate.push({
            label: i,
            value
        })
    }
    return dataGenerate
}

console.log('fata Generator', dataGenerator())

const margin = {top: 10, left: 50, right: 50, bottom: 50}

const yMax = d3.max(dataGenerator, d => d.value)
const yMin = d3.min(dataGenerator, d => d.value)
const xMax = d3.max(dataGenerator, d => d.label)
const xMin = d3.min(dataGenerator, d => d.label)

svg = d3.select('.container')
    .append('svg')
    .attr('width', 400 + margin.left + margin.right)
    .attr('height', 400 + margin.top + margin.bottom)
    //.style("background", "yellow")
    .append("g")
    .attr("transform", "translate(50, 10)")


const xScale = d3.scaleLinear()
    .domain([xMin, xMax])
    .range([0, 400])

svg.append("g")
    .attr("class", "grid")
    .attr("transform", "translate(10, 400)")
    .call(
        d3.axisBottom(xScale)
        .tickSize(-400)
        .tickFormat('')
    )

// var data = [100, 400, 300, 900, 850, 1000]

//     var width = 500,
//         barHeight = 20,
//         margin = 1;

//     var scale = d3.scaleLinear()
//                  .domain([d3.min(data), d3.max(data)])
//                  .range([50, 500]);

//     var svg = d3.select("div")
//                   .append("svg")
//                   .attr("width", width)
//                   .attr("height", barHeight * data.length);

//     var g = svg.selectAll("g")
//                   .data(data)
//                   .enter()
//                   .append("g")
//                   .attr("transform", function (d, i) {
//                       return "translate(0," + i * barHeight + ")";
//                   });

//     g.append("rect")
//        .attr("width", function (d) {
//            return scale(d);
//        })
//        .attr("height", barHeight - margin)

//     g.append("text")
//        .attr("x", function (d) { return (scale(d)); })
//        .attr("y", barHeight / 2)
//        .attr("dy", ".35em")
//        .text(function (d) { return d; });

