export const convertNum = (num) => {

  const num_next = num + 1
  if (num_next < 10) {
    const str_num = `00${num_next}`
    return str_num
  } else if (num_next < 100) {
    const str_num = `0${num_next}`
    return str_num
  } else { const str_num = num_next; return str_num }

}