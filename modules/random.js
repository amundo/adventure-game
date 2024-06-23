let choice = sequence => {
  if(!Array.isArray(sequence)) throw new Error('sequence must be an array')
  return sequence[Math.floor(Math.random() * sequence.length)]  
}

export {
  choice
}