var testData = [];
for(var i = 0;i<100;i++){
	testData.push({
		id:i,
		title:"Chrome "+i,
		version:10+i,
		icon:"/public/image/chrome.png",
		size:10+i+"MB",
		uploadTime:"一天前"
	});
}

console.log(testData.length);
export default testData;
