import { useState } from "react";
import styles from "../../styles/Feedback.module.css";

export default function Feedback() {
    const [details, setDetails] = useState({
        name: "",
        email: "",
    });
    const [submit, setSubmit] = useState(false);

    const handleChange = (e) => {
        setDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = details.email.trim();
        const name = details.name.trim();
        if (!email || !name) return;
        console.log("Name : ", name);
        console.log("Email : ", email);
        setSubmit(true);
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Feedback</h1>
            <p className={styles.caption}>
                Please provide us with your valuable feedback.
            </p>
            <div className={styles.formwrap}>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={details.name}
                        onChange={handleChange}
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={details.email}
                        onChange={handleChange}
                    />
                    <button type="submit" disabled={submit}>
                        Submit
                    </button>
                </form>
            </div>
            {submit && (
                <p className={styles.success}>
                    Your details have been submitted!
                </p>
            )}
        </div>
    );
}
