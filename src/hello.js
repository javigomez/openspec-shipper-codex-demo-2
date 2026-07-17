export function greeting(name) {
  const trimmedName = name?.trim();

  if (!trimmedName) {
    return "Hello, world!";
  }

  return `Hello, ${trimmedName}!`;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  console.log(greeting(process.argv[2]));
}
