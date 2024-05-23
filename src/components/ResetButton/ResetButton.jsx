
export default function ResetButton (prop) {
    function reset() {
if (prop.purchased) {
    setPurchasedState(false);
}
}
return (
    <>
    <button onClick={reset}>Reset</button> <button>Clear</button>
    </>
)
}