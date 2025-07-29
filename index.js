module.exports = (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST method allowed" });
  }

  const data = req.body.data;
  const even = [];
  const odd = [];
  const alphabets = [];
  const specialChars = [];
  let sum = 0;
  let charArray = [];

  for (let item of data) {
    const str = String(item);
    if (!isNaN(str)) {
      const num = parseInt(str);
      sum += num;
      (num % 2 === 0 ? even : odd).push(str);
    } else if (/^[a-zA-Z]+$/.test(str)) {
      alphabets.push(str.toUpperCase());
      charArray.push(...str);
    } else {
      specialChars.push(str);
    }
  }

  const reversed = charArray.reverse();
  let concat = '';
  for (let i = 0; i < reversed.length; i++) {
    concat += i % 2 === 0
      ? reversed[i].toUpperCase()
      : reversed[i].toLowerCase();
  }

  return res.status(200).json({
    is_success: true,
    user_id: "kritica_jain_09102004",
    email: "kritica523.be22@chitkara.edu.in",
    roll_number: "2210990523",
    odd_numbers: odd,
    even_numbers: even,
    alphabets: alphabets,
    special_characters: specialChars,
    sum: String(sum),
    concat_string: concat
  });
};
