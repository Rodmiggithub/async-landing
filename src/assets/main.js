const url = 'https://youtube-v31.p.rapidapi.com/search?channelId=UC6ly_u2ufiHGpYzC_28-8zw&part=snippet%2Cid&order=date&maxResults=9';
const content = null || document.getElementById('content');
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '7bca8419damshc1ac5a6c5478318p194103jsn7d4602d40682',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }

async function fetchData(urlApi){
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;
}
(async () => {
    try{
        const videos = await fetchData(url);
        let view = `
        ${videos.items.map(video => `
        <div class="group relative">
        <div
          class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none"
        >
          <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full" />
        </div>
        <div class="mt-4 flex justify-between">
          <h3 class="text-sm text-gray-700">
            <span aria-hidden="true" class="absolute inset-0"></span>
            ${video.snippet.title}
          </h3>
        </div>
    </div>`).slice(0,8).join('')}
        `;
        content.innerHTML = view;
    }catch(error){
        console.log(error);
    }
})();