export const REG_EXP_NAME = new RegExp("^[a-zA-Z]([-']?[a-zA-Z]+)*( [a-zA-Z]([-']?[a-z]+)*)|[a-zA-Z]+$")
export const REG_EXP_EMAIL = new RegExp("^[-\\w.]+@([A-z0-9][-A-z0-9]+\\.)+[A-z]{2,4}$")
export const REG_EXP_PASSWORD = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^\\w\\s]).{10,}")
export const REG_TYPE_PAGE = new RegExp("\\.(html)$")
