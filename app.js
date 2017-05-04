function action(data) { console.log(JSON.stringify(data, null, 2)) };
function error(err) { console.log(err) };
function loadData(resturl, action, error) {
	axios.get(resturl).then(function (response) {
	    action(response.data);
	}).catch(function (error) {
		console.log(error);
	});
}
loadData("http://localhost:8080/page1/", action, error)