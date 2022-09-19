export async function handler(event, context) {
  console.log(context.functionName);

  return {
    statusCode: 200,
    body: JSON.stringify(context)
  }
}