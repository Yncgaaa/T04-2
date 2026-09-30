const createBarChart = (data) => {
  const svg = d3.select(".responsive-svg-container")
    .append("svg")
    .attr("viewBox", "0 0 1200 400")
    .style("border", "1px solid black");

  const barHeight = 16;   // constant bar height
  const gap = 4;          // spacing between bars
  const xOffset = 100;    // room for labels on the left

  svg
    .selectAll("rect")
    .data(data)
    .join("rect")
    .attr("class", d => `bar bar-${d.count}`)
    .attr("x", xOffset)                                  // always the same x
    .attr("y", (d, i) => i * (barHeight + gap))          // space bars by index
    .attr("width", d => d.count)                         // uses numeric column directly
    .attr("height", barHeight);
};