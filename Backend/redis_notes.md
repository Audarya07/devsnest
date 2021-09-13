### Redis Installation

1. For Windows
	- Enable WSL from "Turn Windows features on or off settings"
	- Restart the machine
	- Install Ubuntu20.04 from Windows Store
	- Open Ubuntu and setup name and password
	- Run the following commands:
		> sudo apt-get update  
		> sudo apt-get upgrade  
		> sudo apt-get install redis-server  
		> sudo service redis-server restart  
		> redis-cli  

2. For Linux
	- Run the commands:
		> sudo apt-get install redis-server  
		> sudo service redis-server restart  
		> redis-cli  

-----------------------------------------------------------------------

#### USAGE
- SET key value
- GET key
- ttl key
- KEYS *
- DEL key
- FLUSHALL
- EXISTS key
- expire key time
- setex key time value
	

#### For Arrays  
- LPUSH array value
- RPUSH array value
- LRANGE array start stop
- LPOP array
- RPOP array


#### For Sets
- SADD myset value
- SMEMBERS myset
- SREM myset value


#### For Object/Hash
- HSET key field value 
- HGET key field
- HGETALL key
- HDEL key field
- HEXISTS key field

#### PUB/SUB  
- PUBLISH channel-name message  
- SUBSCRIBE channel-name  
- PSUBSCRIBE <pattern_to_match_channels> (provides pattern matching) 
- UNSUBSCRIBE channel-name  
- PUNSUBSCRIBE <pattern_to_match_channel>  

#### STREAMS  
* Streams are used to store a set of key value pairs in a pipeline which are identified via the entry key.  
* If entry key is not given explicitly by the user i.e the user writes * instead of the entry key then redis generates the key using the current timestamp in milliseconds.  

- `XADD stream-name entry-key key1 value1 key2 value2` ... and so on  
	* Example: XADD checkin 100 name audi age 22 loc pune rating 5 --> here 100 is the entry key given by user  
- `XRANGE stream-name start_entry_key  end_entry_key` --> returns entries in the given range in oldest entry first order  
- `XRANGE stream-name start end COUNT num`  --> limit the output to `num` entries  
- `XREVRANGE stream-name end start`  --> return output in reverse order i.e newest entries first  
- `XRANGE stream-name - + COUNT num` --> top `num` oldest entries first  
- `XREAD STREAMS stream-name start`  --> to return all entries greater than `start`  
- `XREAD COUNT num STREAMS stream-name start`  --> return `num` entries from the stream after entry-key = start.  
- `XREAD COUNT num BLOCK x STREAMS stream-name entry-key`  
	- `num` is number of entries I want to consume  
	- `x` is how long to block(in milliseconds) in case the stream doesn't yet contain any entries newer(higher in number) than the one whose entry-key I have supplied.  
- `XREAD BLOCK x STREAMS stream-name $` --> waits for `x` milliseconds to recieve any entry.  
- `XTRIM stream-name MAXLEN num`  --> trims/removes oldest `num` entries from the stream.  
- `XADD stream-name MAXLEN num * key1 val1 key2 val2` --> limits the number of max num of entries in the stream to `num`.  
- `XLEN stream-name`  --> returns length of stream.  
