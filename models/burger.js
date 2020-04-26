var orm = require("./config/orm.js");

// Find all the pets ordering by the lowest price to the highest price.
// orm.selectAndOrder("animal_name", "pets", "price");

// Find a pet in the parties clients table by an party and client.
orm.selectWhere("parties", "party_type", "grown-up");
orm.insertOne("parties", "party_names");
orm.updateOne("clients", "client_names");
// Find the buyer with the most pets.
// orm.findWhoHasMost("buyer_name", "buyer_id", "buyers", "pets");