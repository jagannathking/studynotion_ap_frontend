import signupImg from "../assets/Images/signup.webp"
import Templates from "../components/core/Auth/Templates"

function Signup() {
  return (
    <Templates
      title="Join the millions learning to code with StudyNotion for free"
      description1="Build skills for today, tomorrow, and beyond."
      description2="Education to future-proof your career."
      image={signupImg}
      formType="signup"
    />
  )
}

export default Signup
