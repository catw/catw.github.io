console.log('werks')

// curl -XPOST \
//   https://api.sparkpost.com/api/v1/transmissions \
//   -H "Authorization: <YOUR API KEY>" \
//   -H "Content-Type: application/json" \
//   -d '{"content": {"from": "testing@sparkpostbox.com", "subject": "Oh hey", "text":"Testing SparkPost - the most awesomest email service in the world"}, "recipients": [{"address": "developers+curl@sparkpost.com"}]}'

var data = {
  {
    "content": {
      "from": "testing@sparkpostbox.com",
      "subject": "Oh hey",
      "text":"Testing SparkPost - the most awesomest email service in the world"
    },
    "recipients": [
      {
        "address": "cat.woodmansee@gmail.com"
      }
    ]
  }
}

$.ajax({
  type: 'POST',
  url: 'https://api.sparkpost.com/api/v1/transmissions',
  headers: {
    'Authorization': '5d45515e3700421bc209c10f6555c7171dafa820',
    'Content-Type': 'application/json'
  },
  data: data,
  dataType: 'json',
  success: function() {
    console.log('sparkpost: success');
  }
})
