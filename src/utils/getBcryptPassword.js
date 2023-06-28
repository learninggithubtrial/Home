import bcrypt from "bcryptjs";

const secretKey = "safsafaxdxqDas3243@DSDS";
const strengthFactor = 11;

const hashPassword = async (password) => {
  try {
    const salt = await bcrypt.genSalt(strengthFactor);
    const hashedPassword = await bcrypt.hash(password, salt + secretKey);
    
    console.log("Hashed Password:", hashedPassword);
  } catch (error) {
    console.error("Error hashing password:", error);
  }
};

export default hashPassword;

