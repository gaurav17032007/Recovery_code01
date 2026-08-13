function get() {
    let obj = {
        name: "John",
        regular: function () {
            let show= () => {
                console.log("hello");
                console.log("ok " + this.name);
            }
            show();
        }
    }
    obj.regular();
}
get();