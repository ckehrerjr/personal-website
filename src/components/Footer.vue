<template>
    <div>
        <footer>
            <small>&copy; k35c 2008 &ndash; {{ showFullYear() }}</span></small>
        </footer>
    </div>
</template>

<script>
	export default {
		methods: {
			showFullYear() {
				return new Date().getFullYear();
			}
		}
	}
</script>
