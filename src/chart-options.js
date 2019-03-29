export const options = {
    animationEnabled: true,
    exportEnabled: true,

    axisY: {
        title: "#สส",
        suffix: "คน"
    },
    toolTip: {
        shared: true,
        reversed: true
    },
    legend: {
        reversed: true,
        cursor: "pointer",
    },
    data: [
    {
        type: "stackedColumn",
        name: "สส เขต",
        showInLegend: true,
        dataPoints: [
            { label: "Jan", y: 200 },
            { label: "Feb", y: 12 },
            { label: "Mar", y: 14 },
            { label: "Apr", y: 13 },
            { label: "May", y: 13 },
            { label: "Jun", y: 13 },
            { label: "Jul", y: 14 },
            { label: "Aug", y: 14 },
            { label: "Sept", y: 13 },
            { label: "Oct", y: 14 },
            { label: "Nov", y: 14 },
            { label: "Dec", y: 14 }
        ]
    },
    {
        type: "stackedColumn",
        name: "สส ปาร์ตี้",
        showInLegend: true,
        yValueFormatString: "#0.#,.",
        indexLabel: "#total bn",
			indexLabelPlacement: "outside",
        dataPoints: [
            { label: "Jan", y: 12 },
            { label: "Feb", y: 13 },
            { label: "Mar", y: 15 },
            { label: "Apr", y: 16 },
            { label: "May", y: 17 },
            { label: "Jun", y: 17 },
            { label: "Jul", y: 18 },
            { label: "Aug", y: 18 },
            { label: "Sept", y: 17 },
            { label: "Oct", y: 18 },
            { label: "Nov", y: 18 },
            { label: "Dec", y: 18 }
        ]
    }]
}