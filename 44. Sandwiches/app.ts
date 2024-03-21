//Exercise 44 Sandwiches
function make_sandwich(...items: string[]): void {
    console.log("Making a sandwich with:");
    for (const item of items) {
        console.log(`- ${item}`);
    }
}
make_sandwich('ham', 'cheese', 'lettuce');
make_sandwich('turkey', 'bacon');
make_sandwich('tuna');