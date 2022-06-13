const backgroundStyles = {
    background:
          "center cover no-repeat url(https://i.picsum.photos/id/219/200/300.jpg?hmac=RGnJfbO2380zLCFSj2tm_q0vW0wtw67d0fhWHX2IoDk)"
}

export default function RentalCard(){
    return(
        <div className="rental-card" style={backgroundStyles}>
            <h2>This is a very long title to test how it renders, It renders beautifully</h2>
        </div>
    )
}