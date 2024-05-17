const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        email: '',
        password: '',
        city: '',
        state: '',
        zip: '',
        address: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can handle form submission here, e.g., sending form data to the server.
        console.log('Form data:', formData);
    };

    return (
        <div className="card-body">
            <form onSubmit={handleSubmit}>
                <div className="row my-3">
                    <div className="col-sm-6">
                        <label htmlFor="name" className="form-label">
                            Name
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="col-sm-6">
                        <label htmlFor="surname" className="form-label">
                            Surname
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="surname"
                            name="surname"
                            value={formData.surname}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div className="row my-3">
                    <div className="col-sm-6">
                        <label htmlFor="email" className="form-label">
                            E-mail
                        </label>
                        <input
                            placeholder="@gmail.com"
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="col-sm-6">
                        <label htmlFor="password" className="form-label">
                            Password
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div className="row my-3">
                    <div className="col-sm-6">
                        <label htmlFor="city" className="form-label">
                            City
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="city"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="col-sm">
                        <label htmlFor="state" className="form-label">
                            State
                        </label>
                        <select
                            className="form-select"
                            id="autoSizingSelect"
                            name="state"
                            value={formData.state}
                            onChange={handleChange}
                            required
                        >
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div className="col-sm">
                        <label htmlFor="zip" className="form-label">
                            Zip Code
                        </label>
                        <input
                            type="number"
                            className="form-control"
                            id="zip"
                            name="zip"
                            value={formData.zip}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="row my-3">
                    <div className="col-sm-12">
                        <label htmlFor="address" className="form-label">
                            Address
                        </label>
                        <textarea
                            id="address"
                            className="form-control"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                        ></textarea>
                    </div>
                </div>
                <div className="row my-3">
                    <div className="col-sm-12">
                        <label htmlFor="message" className="form-label">
                            Message
                        </label>
                        <textarea
                            id="message"
                            className="form-control"
                            name="message"
                            rows="5"
                            placeholder="Type your message here.."
                            value={formData.message}
                            onChange={handleChange}
                        ></textarea>
                    </div>
                </div>
                <div className="row my-3 text-center">
                    <div className="col-sm-12">
                        <button className="btn btn-primary btn-lg col-sm-3" type="submit">
                            Submit
                        </button>
                        <button className="btn btn-danger btn-lg col-sm-3" type="reset">
                            Clear
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};
