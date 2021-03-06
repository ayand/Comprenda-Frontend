import * as d3 from 'd3';

class SubmissionScore {
    constructor(element, score, svgSize) {
        this.svgSize = svgSize;
        const slices = [
          { amount: score, type: "score" },
          { amount: 1 - score, type: "non-score" }
        ]

        const computeNum = (num) => {
            return (num * svgSize) / 120;
        }

        var pie = d3.pie().value(d => d.amount).sort(null);
        var pieSlices = pie(slices);

        this.svg = d3.select(element);

        const arc = this.svg.selectAll("g.arc")
            .data(pieSlices)
            .enter()
            .append("g")
            .attr("transform", `translate(${svgSize/2},${svgSize/2})`)

        arc.append("path")
            .attr("d", d3.arc().innerRadius((svgSize / 2) - computeNum(20)).outerRadius(svgSize / 2))
            .attr("fill", function(d) {
                const { type, amount } = d.data;
                if (type === "non-score") {
                    return "#999999"
                }
                if (amount >= 0.9) {
                    return "#80e86b";
                } else if (amount >= 0.8) {
                    return "#F7F14A"
                } else if (amount >= 0.7) {
                    return "#FF7D19"
                }
                return "#F74A4A";
            })
            .style("stroke", "stroke")

        const percentage = Math.round(score * 100);
        const fontSize = computeNum(22);
        const offset = computeNum(10);

        this.svg.append("text")
            .attr("x", svgSize / 2)
            .attr("y", (svgSize / 2) + offset)
            .text(percentage + "%")
            .style("text-anchor", "middle")
            .style("font-weight", "bold")
            .style("font-size", `${fontSize}px`)
    }

}

export default SubmissionScore;
