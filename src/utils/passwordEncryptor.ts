import bcrypt from 'bcrypt'
/**
 * Encrypts the given password using bcrypt with the specified number of salt rounds.
 *
 * @param {string} password - the password to be encrypted
 * @param {number} saltRounds - the number of salt rounds for encryption
 * @return {string} the encrypted hash of the password
 */
export default function passwordEncryptor(password: string, saltRounds: number): string {
    const salt = bcrypt.genSaltSync(saltRounds);
    return bcrypt.hashSync(password, salt);
}