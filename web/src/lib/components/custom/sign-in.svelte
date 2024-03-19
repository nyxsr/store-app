<script>
	import { Button, buttonVariants } from '../ui/button';
	import * as Dialog from '../ui/dialog';
	import { Input } from '../ui/input';
	import { Label } from '../ui/label';
</script>

<Dialog.Root>
	<Dialog.Trigger class={buttonVariants({variant:"default"})}>Masuk</Dialog.Trigger>
	<Dialog.Content class="sm:max-w-[425px]">
		<Dialog.Header>
			<Dialog.Title>Selamat Datang</Dialog.Title>
			<Dialog.Description>
				Masukkan username dan password anda untuk masuk
			</Dialog.Description>
		</Dialog.Header>
		<div class="grid gap-4 py-4">
			<div class="grid grid-cols-4 items-center gap-4">
				<Label for="email" class="text-right">Email</Label>
				<Input id="email" type="email" placeholder="johndoe@example.com" class="col-span-3" />
			</div>
			<div class="grid grid-cols-4 items-center gap-4">
				<Label for="password" class="text-right">Password</Label>
				<Input id="password" type="password" class="col-span-3" />
			</div>
		</div>
		<Dialog.Footer>
			<Button type="submit">Masuk</Button>
		</Dialog.Footer>
	</Dialog.Content>
</Dialog.Root>
