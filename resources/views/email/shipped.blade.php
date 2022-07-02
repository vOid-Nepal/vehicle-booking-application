@component('mail::panel')
    <table>
        <tr>
            <td>Name:</td>
            <td> {{$name}}</td>
        </tr>
        <tr>
            <td>PickUp:</td>
            <td> {{$pickUpPoint}}</td>
        </tr>
        <tr>
            <td>Drop:</td>
            <td> {{$dropPoint}}</td>
        </tr>
        <tr>
            <td>Date:</td>
            <td> {{$date}}</td>
        </tr>
        <tr>
            <td>Vehicle:</td>
            <td> {{$vehicle->name}}</td>
        </tr>
        <tr>
            <td>Fare:</td>
            <td> ${{$fare}}</td>
        </tr>
        <tr>
            <td>Distance:</td>
            <td>{{$distance}}</td>
        </tr>
    </table>
@endcomponent
