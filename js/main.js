var nb = 0;

var app = new Vue({
	el: "#app",
	created() { this.load(); },
	data: {
		message : "Sloubi",
		login : "",
		pwd : ""
	},
	methods: {
		hop() {
			if(!(this.login == "" && this.pwd == "")) {
				if(this.login == "test" && this.pwd == "test") {
					console.log("sale");
				} else {
					console.log("sale et faux");
				}
			}
		},
		load() {
			axios.get("/message").then(
				(response) => {
					this.message = response.data.message;
				}
			);
		}
	}
});
