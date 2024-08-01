class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = { name: 'Alex' };
        this.changeName = this.changeName.bind(this)
    }

    // Incorrect function
    changeName() {
        this.state.name =({name: 'Charlie'});
    }

    render() {
        return (
            <div>
                <h1>User Profile</h1>
                <p>Name: {this.state.name}</p>
                <button onClick={this.changeName}>Change Name</button>
            </div>
        );
    }
}